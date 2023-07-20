import { Card } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';

const Post = () => {
    const router = useRouter();
    const { postId } = router.query;
    return (
        <Card title="Card title">
            <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
                This is post no : {postId}
            </Card>
        </Card>
    );
};

export default Post;