import { myList } from "@/components/Data";
import Grid from "@/components/Grid";
import Navbar from "@/components/Navbar";
import Layout from "@/components/layout";

export default function MyList() {
  return (
      <div className="">
        <Grid titles={myList} />
      </div>
  );
}


MyList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};