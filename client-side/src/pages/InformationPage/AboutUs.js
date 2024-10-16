import React from 'react';
import './AboutUs.css';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';

const AboutUs = () => {
    return (
        <>
            <Header />
            <div className='bg-main-bg-color py-5'>
                <div className="about-page">
                    <header className="about-header">
                        <h1>Về BookStars</h1>
                    </header>
                    <main className="about-content">
                        <h2>BookStars</h2>
                        <p>
                            Chào mừng bạn đến với <strong>BookStars</strong> - nơi khơi dậy niềm đam mê đọc sách và kết nối những tâm hồn yêu sách! 
                            Chúng tôi là một nền tảng trực tuyến chuyên cung cấp sách chất lượng từ nhiều thể loại, từ khoa học, đến nghệ thuật.
                        </p>
                        <p>
                            Tại <strong>BookStars</strong>, chúng tôi tin rằng mỗi cuốn sách đều là một ngôi sao sáng, giúp bạn mở ra những chân trời tri thức mới, 
                            trải nghiệm những câu chuyện đầy cảm hứng, và phát triển bản thân. Với sứ mệnh lan tỏa văn hóa đọc, 
                            chúng tôi cam kết mang đến cho khách hàng những đầu sách đa dạng, cập nhật liên tục và giá cả hợp lý.
                        </p>
                        <p>
                            Với đội ngũ yêu sách và tận tâm, chúng tôi luôn nỗ lực đem đến trải nghiệm mua sắm sách trực tuyến dễ dàng, 
                            nhanh chóng và thuận tiện. Chúng tôi tự hào là người bạn đồng hành trên hành trình khám phá kiến thức của bạn.
                        </p>
                        <p>
                            Cùng <strong>BookStars</strong> chạm đến những ngôi sao tri thức, và tỏa sáng với những cuốn sách yêu thích của bạn!
                        </p>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );   
};

export default AboutUs;
