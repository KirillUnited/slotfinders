import * as React from "react"

import Layout, { Section } from "../components/layout"
import Seo from "../components/seo"

const SinglePost = ({ pageContext }) => (
    <Layout>
        <Section content={`content`}>
            <div dangerouslySetInnerHTML={{ __html: pageContext.html }}
                style={{
                    fontFamily: 'Open Sans',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: '16px',
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.64)"
                }}>
            </div>
        </Section>
    </Layout>
);

export const Head = () => <Seo title="Privacy policy" />

export default SinglePost;
