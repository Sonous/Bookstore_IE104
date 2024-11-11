import React, { useContext, useEffect, useState } from 'react';
import AccountLayout from './AccountLayout';
import images from '~/assets/images';
import userApi from '~/apis/userApi';
import { UserContext } from '~/context/UserContextProvider';
import Book from '~/components/Book/Book';
import Swal from 'sweetalert2';
// import FavoriteLayout from '../FavoritePage/FavoriteLayout';

export default function FavoriteBooksPage() {
    const [favoriteInfo, setFavoriteInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(UserContext);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const books = await userApi.getAllFavotiteBooks(user.user_id);

                setFavoriteInfo(books);
            } catch (error) {
                console.error(error);
            }
        };

        if (user) fetchApi();
    }, [user, isLoading]);

    const handleRemoveAllFavorites = async () => {
        try {
            const result = await Swal.fire({
                icon: 'question',
                text: 'Bạn có muốn xóa tất cả không?',
                showDenyButton: true,
            });

            if (result.isConfirmed) {
                const message = await userApi.deleteAllFavotiteBooks(user.user_id);

                console.log(message);
                setIsLoading(!isLoading);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AccountLayout currentPage={'Sản phẩm yêu thích'}>
            <div className="right-info-likerecently rounded-xl bg-white shadow-lg px-5 sm:px-10 mx-5 ">
                <div className="py-5">
                    <div className="flex-col">
                        <h1 className="text-2xl font-bold border-b-2 sm:text-xl pb-5 mb-3">Danh sách yêu thích</h1>
                        <div className="flex justify-end">
                            <button
                                onClick={handleRemoveAllFavorites}
                                className="mb-6 rounded-md border-[1px] bg-primary-color text-center text-white px-2 py-2 hover:bg-green-800 "
                            >
                                Xóa tất cả
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-[40px] wra">
                        {favoriteInfo.length > 0 ? (
                            favoriteInfo.map((favoriteBook, index) => {
                                return <Book key={index} collection {...favoriteBook} />;
                            })
                        ) : (
                            <div className="flex flex-col items-center py-5 col-span-5">
                                <img src={images.nothingIcon} alt="nothing" className="w-44 h-44" />
                                <span>Bạn chưa có sách yêu thích nào...</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AccountLayout>
    );
}
