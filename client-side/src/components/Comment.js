import { UserOutlined } from '@ant-design/icons';
import { Avatar, Rate } from 'antd';
import React from 'react';
import { imageUrl } from '~/configs/axios.config';
import { formatDate } from '~/utils/functions';

export default function Comment({ comment }) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
                {comment.user.user_avatar_url ? (
                    <img
                        src={`${imageUrl}/${comment.user.user_avatar_url}`}
                        alt=""
                        className="w-[40px] h-[40px] rounded-full"
                    />
                ) : (
                    <Avatar icon={<UserOutlined />} size={40} />
                )}
                <div className="flex-1">
                    <span>{comment.user.user_name}</span>
                    <Rate className="text-[14px] flex items-center" disabled value={comment.rating_star} />
                </div>
                <span>{formatDate(comment.created_at)}</span>
            </div>
            <p>{comment.rating_content}</p>
        </div>
    );
}
