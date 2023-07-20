import RootLayout from "@/components/layouts/RootLayout";

const About = () => {
  return (
    <h1>About</h1>
  )
}

export default About;

About.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}