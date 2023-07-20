import { Button, Result } from "antd";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    setTimeout(() => {
        router.push("/")
    }, 3000);
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
            />
        </div>
    );
};

export default NotFound;