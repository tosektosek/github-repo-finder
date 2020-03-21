export interface Repository {
  id: number;
  name: string;
  owner: Owner;
  full_name: string;
  fork: boolean;
  branches: Branch[];
}

export interface Owner {
  login: string;
  id: number;
}

export interface Branch {
  name: string;
  commit: Commit;
}

export interface Commit {
  sha: string;
  url: string;
  protected: false;
}
