import { useEffect, useState } from "react";
import { fetchRatings } from "../../services/ratings.service";
import RatingsView from "./RatingsView";
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import type { Rating } from "../../types/ratingType";
import style from "./Ratings.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setData, type RateObj } from "../../redux/slices/ratings-slice";
import type { RootState } from "../../redux/store";

const CustomPagination = styled(Pagination)({
  '& .MuiPaginationItem-root': {
    color: 'white',
    fontSize: '20px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  '& .Mui-selected': {
    backgroundColor: 'purple',
    color: 'white',
  },
});

const RatingsContainer = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [pageCount, setPageCount] = useState(10);
    const dispatch = useDispatch();
    const savedData = useSelector((state: RootState) => state.rating.data);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPageNumber(value);
    };

    const getRatings = async() => {
        const response = await fetchRatings(pageNumber);
        const data = await response;
        return data
    };
    
    useEffect(() => {
        const loadRatings = async () => {
            if (savedData.find(obj => obj.id === pageNumber) === undefined) {
                try {
                    const ratingsData = await getRatings();
                    const obj: RateObj = {
                        id: pageNumber,
                        data: ratingsData.items as Array<Rating>
                    }
                    dispatch(setData(obj));
                    setPageCount(Math.ceil(ratingsData.total_count / 20));
                }
                catch (error) {
                    console.error("Error fetching ratings:", error);
                }
            }
        }
        loadRatings();
    }, [pageNumber]);

    const getRenderData = () => {
        const dataForPage = savedData.find(obj => obj.id === pageNumber);
        return dataForPage ? dataForPage.data : [];
    }

    return (
        <div className={style.mainContainer}>
            <RatingsView repoData={getRenderData()} />
            {
                savedData.length > 0 ? <CustomPagination count={pageCount} page={pageNumber} onChange={handleChange} color="primary" /> : null
            }
            
        </div>
    );
};

export default RatingsContainer;
