import RootLayout from "@/components/layouts/RootLayout"

const Contact = () => {
  return (
    <h1>Contact</h1>
  )
}

export default Contact

Contact.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}