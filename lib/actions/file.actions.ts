import { FileType } from "@/types";

interface GetFilesParams {
  types: FileType[];
  searchText: string;
  sort: string;
}

interface FilesResponse {
  total: number;
  documents: any[];
}

export const getFiles = async ({
  types,
  searchText,
  sort,
}: GetFilesParams): Promise<FilesResponse> => {
  // TODO: Implement file fetching logic
  return {
    total: 0,
    documents: [],
  };
};
