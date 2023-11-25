import Image from "next/image";
import Layout from "../components/Layout";


export default function about() {
  return (
    <div>
        <Image
        src={"/debian.webp"}
        width={600}
        height={600}
        alt="Mi imagen"
        ></Image>
        <Layout title={"main page"}>
        <h1>About</h1>
        </Layout>
    </div>
  )
}
