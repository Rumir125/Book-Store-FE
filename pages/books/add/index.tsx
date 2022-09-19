import { NextPage } from "next";
import { useRouter } from "next/router";

import CreateOrEditBook from "../../../src/components/CreateOrEditBook";

const AddBook: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <CreateOrEditBook />
    </div>
  );
};

export default AddBook;
