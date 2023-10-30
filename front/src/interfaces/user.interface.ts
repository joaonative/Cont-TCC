export interface User {
  res: {
    id: string;
    email: string;
    name: string;
    isAdminL: boolean;
    created_at: Date;
    updated_at: Date;
  };
}
