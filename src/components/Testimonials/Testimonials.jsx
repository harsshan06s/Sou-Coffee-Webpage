import React, { useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/icons8-back-48.png';
import back_icon from '../../assets/icons8-back1-48.png';
import u1 from '../../assets/user1.jpg';
import u2 from '../../assets/user2.jpg';
import u3 from '../../assets/user3.jpg';
import u4 from '../../assets/user4.jpg';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        { 
            user: 'Amara', 
            role: 'Turkish Brew Insights', 
            image: u1, 
            text: '"A Taste of Tradition! I tried the Turkish coffee at Brewzy and was absolutely impressed! The rich, bold flavor was exactly what I was looking for. The unique preparation method really adds depth to the experience, and the smooth, velvety texture made each sip a pleasure. The coffee was perfectly balanced, and I loved how it was served with a sweet Turkish delight on the side. Brewzy truly brought an authentic taste of Turkish coffee that I won\'t forget!"'
        },
        { 
            user: 'Eliana', 
            role: 'Thoughts on Latte', 
            image: u2, 
            text: '"Perfectly Creamy and Smooth!" I had the latte at Brewzy, and it was absolutely delightful! The coffee was perfectly brewed, with just the right balance of strong espresso and creamy milk. The smooth texture and subtle sweetness made it a comforting drink, perfect for a cozy moment. I could taste the quality of the beans, and the froth was just the right consistency."'
        },
        { 
            user: 'Leonardo', 
            role: 'Cappuccino Impressions', 
            image: u3, 
            text: '"A Perfect Cappuccino Experience!" I had the cappuccino at Brewzy, and it was everything I was hoping for! The rich espresso was perfectly complemented by the creamy, velvety foam, making each sip a smooth and satisfying experience. The balance of flavors was spot on, and the froth was light and airy. It\'s clear that Brewzy takes pride in crafting quality coffee—this cappuccino was a true masterpiece!"'
        },
        { 
            user: 'Mateo', 
            role: 'Espresso Experience', 
            image: u4, 
            text: '"Bold and Invigorating!" I tried the espresso at Brewzy, and it was phenomenal! The flavor was intense and bold, with just the right amount of richness. It packed a punch, delivering that perfect caffeine kick I needed. The smooth finish left a lingering, pleasant aftertaste, and the overall experience was simply refreshing. If you\'re a fan of strong, authentic espresso, Brewzy is the place to go!"'
        }
    
    ];
    const slideForward = () => {
        if (currentIndex < testimonials.length - 1) {
            setCurrentIndex(currentIndex + 1); 
        }
    };
    const slideBackward = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
         };
    }
    return (
        <div className="testimonials">
            <img src={back_icon} alt="Back" className="back-btn" onClick={slideBackward} />
            <div className="slider">
                <ul style={{
                    transform: `translateX(-${currentIndex * 100}%)`, 
                    transition: 'transform 0.5s ease' 
                }}>
                    {testimonials.map((testimonial, index) => (
                        <li key={index}>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={testimonial.image} alt={testimonial.user} />
                                    <div>
                                        <h3>{testimonial.user}</h3>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>
                                <p>{testimonial.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
        </div>
    );
};

export default Testimonials;
