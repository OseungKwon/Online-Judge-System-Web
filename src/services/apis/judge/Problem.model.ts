export interface ProblemsRequestInterface {
  search: string;
  page?: number;
  offset: number;
}
export interface ProblemRequestInterface {
  pid: number;
}

export interface ProblemResponseInterface {
  id: number;
  title: string;
  problem: string;
  input: string;
  output: string;
  timeLimit: number;
  memoryLimit: number;
  tags: string[];
  isArchived: true;
  deletedAt: string;
  contributerId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProblemUpdateRequestInterface {
  pid: number;
  title: string;
  problem: string;
  input: string;
  output: string;
  timeLimit: number;
  memoryLimit: number;
  tags: string[];
}

export interface ProblemCreateResponseInterface {
  title: string;
  problem: string;
  input: string;
  output: string;
  timeLimit: number;
  memoryLimit: number;
  tags: string[];
}

export interface ProblemDeleteRequestInterface {
  pid: number;
}

export interface ProblemDeleteResponseInterface {
  input: string;
  output: string;
}
