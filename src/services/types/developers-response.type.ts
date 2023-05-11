export type DevelopersResponse = {
  data: Array<{
    id: number;
    attributes: {
      name: string;
      role: string;
      enable: boolean;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      locale: string;
      avatar: {
        data: {
          id: number;
          attributes: {
            name: string;
            url: string;
          };
        };
      };
    };
  }>;
};
