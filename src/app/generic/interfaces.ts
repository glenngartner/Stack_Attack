export interface PageLinks {
  name: string;
  route: string;
}

export interface StackReply {
  items: StackQuestion[] & StackAnswer[];
  has_more: number;
  quota_max: number;
  quota_remaining: number;
}

export interface StackQuestion {
  accepted_answer_id: number;
  answer_count: number;
  answers?: StackAnswer[];
  body?: string;
  body_markdown?: string;
  score: number;
  view_count: number;
  tags: string[];
  creation_date: Date;
  question_id: number;
  title: string;
  link: string;
}
export interface StackAnswer {
  answer_id: number;
  body: string;
  creation_date: Date;
  is_accepted: boolean;
  score: number;
}
