import React from 'react';
import { render, screen } from '@testing-library/react';
import RatingsView from './RatingsView';
import type { Rating } from "../../types/ratingType";

jest.mock('./Ratings.module.scss', () => ({
  container: 'container',
  ratingCardContainer: 'ratingCardContainer',
  ratingCardTitle: 'ratingCardTitle',
  ratingCardDescription: 'ratingCardDescription',
  subElementContainer: 'subElementContainer',
  userDataWrapper: 'userDataWrapper',
  userImage: 'userImage',
}));

describe('RatingsView', () => {
  const mockRepoData: Rating[] = [
    {
        id: 1,
        name: 'Test Repo 1',
        description: 'This is a test repository',
        stargazers_count: 100,
        owner: {
            login: "testuser1",
            id: 148330874,
            node_id: "O_kgDOCNdZeg",
            avatar_url: "https://avatars.githubusercontent.com/u/148330874?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/deepseek-ai",
            html_url: "https://github.com/deepseek-ai",
            followers_url: "https://api.github.com/users/deepseek-ai/followers",
            following_url: "https://api.github.com/users/deepseek-ai/following{/other_user}",
            gists_url: "https://api.github.com/users/deepseek-ai/gists{/gist_id}",
            starred_url: "https://api.github.com/users/deepseek-ai/starred{/owner}{/repo}",
            subscriptions_url: "https://api.github.com/users/deepseek-ai/subscriptions",
            organizations_url: "https://api.github.com/users/deepseek-ai/orgs",
            repos_url: "https://api.github.com/users/deepseek-ai/repos",
            events_url: "https://api.github.com/users/deepseek-ai/events{/privacy}",
            received_events_url: "https://api.github.com/users/deepseek-ai/received_events",
            type: "Organization",
            user_view_type: "public",
            site_admin: false,
        },
        node_id: '',
        full_name: '',
        private: false,
        html_url: '',
        fork: false,
        url: '',
        forks_url: '',
        keys_url: '',
        collaborators_url: '',
        teams_url: '',
        hooks_url: '',
        issue_events_url: '',
        events_url: '',
        assignees_url: '',
        branches_url: '',
        tags_url: '',
        blobs_url: '',
        git_tags_url: '',
        git_refs_url: '',
        trees_url: '',
        statuses_url: '',
        languages_url: '',
        stargazers_url: '',
        contributors_url: '',
        subscribers_url: '',
        subscription_url: '',
        commits_url: '',
        git_commits_url: '',
        comments_url: '',
        issue_comment_url: '',
        contents_url: '',
        compare_url: '',
        merges_url: '',
        archive_url: '',
        downloads_url: '',
        issues_url: '',
        pulls_url: '',
        milestones_url: '',
        notifications_url: '',
        labels_url: '',
        releases_url: '',
        deployments_url: '',
        created_at: '',
        updated_at: '',
        pushed_at: '',
        git_url: '',
        ssh_url: '',
        clone_url: '',
        svn_url: '',
        homepage: '',
        size: 0,
        watchers_count: 100,
        language: '',
        has_issues: false,
        has_projects: false,
        has_downloads: false,
        has_wiki: false,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: { 
            key: "mit",
            name: "MIT License",
            spdx_id: "MIT",
            url: "https://api.github.com/licenses/mit",
            node_id: "MDc6TGljZW5zZTEz"
        },
        allow_forking: false,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: '',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: '',
        score: 0
    }
  ];

  it('renders all repository items', () => {
    render(<RatingsView repoData={mockRepoData} />);
    expect(screen.getByText('Test Repo 1')).toBeInTheDocument();
  });

  it('displays repository names correctly', () => {
    render(<RatingsView repoData={mockRepoData} />);
    mockRepoData.forEach((repo) => {
      expect(screen.getByText(repo.name)).toBeInTheDocument();
    });
  });

  it('displays owner login names correctly', () => {
    render(<RatingsView repoData={mockRepoData} />);
    expect(screen.getByText('testuser1')).toBeInTheDocument();
  });

  it('displays star counts correctly', () => {
    render(<RatingsView repoData={mockRepoData} />);
    expect(screen.getByText('⭐ 100')).toBeInTheDocument();
  });

});