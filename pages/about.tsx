import Link from "next/link"
import { NextPage } from "next/types"

const AboutPage: NextPage = () => {
    return (
        <>
            <h2>About page</h2>
            <Link href={'/'}>Go to index</Link>
        </>
    )
}

export default AboutPage