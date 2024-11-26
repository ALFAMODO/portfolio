import Image from 'next/image';
import React, { useState } from 'react';
import ai1 from '../../public/assets/certifications/ai1.png';
import ai2 from '../../public/assets/certifications/ai2.png';
import ai3 from '../../public/assets/certifications/ai3.png';
import ai4 from '../../public/assets/certifications/ai4.png';
import ds1 from '../../public/assets/certifications/ds1.png';
import ds2 from '../../public/assets/certifications/ds2.png';
import ds3 from '../../public/assets/certifications/ds3.png';
import ds4 from '../../public/assets/certifications/ds4.png';
import sd1 from '../../public/assets/certifications/sd4.png';
import sd2 from '../../public/assets/certifications/sd2.png';
import sd3 from '../../public/assets/certifications/sd3.png';
import sd4 from '../../public/assets/certifications/sd1.png';

const Certifications = () => {
    const [showMore, setShowMore] = useState({
        ai: false,
        ds: false,
        sd: false,
    });

    const [selectedImage, setSelectedImage] = useState(null);

    const certificationData = {
        ai: [ai1, ai2, ai3, ai4],
        ds: [ds1, ds2, ds3, ds4],
        sd: [sd1, sd2, sd3, sd4],
    };

    const toggleShowMore = (column) => {
        setShowMore((prevState) => ({
            ...prevState,
            [column]: !prevState[column],
        }));
    };

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div id="certifications" className="w-full lg:h-auto">
            <div className="max-w-[1240px] p-6 md:p-0 mx-auto justify-center pt-10 md:pt-28">
                <p className="text-xl tracking-widest uppercase text-teal-700 font-bold font-prata">
                    Certifications
                </p>
                <h2 className="py-2 md:py-4 text-lg md:text-2xl lg:text-4xl font-prata">
                    What I&apos;ve Achieved
                </h2>
            </div>
            <div className="certifications-container">
                {Object.entries(certificationData).map(([key, images]) => (
                    <div key={key} className="column">
                        <h3 className="column-title">
                            {key === 'ai' ? 'Artificial Intelligence/ML' : key === 'ds' ? 'Data Scientist/Analyst' : 'Software Engineer'}
                        </h3>
                        <div className="image-grid">
                            {images
                                .slice(0, showMore[key] ? images.length : 1)
                                .map((image, index) => (
                                    <div key={index} className="card" onClick={() => openModal(image)}>
                                        <div className="image-container">
                                            <Image src={image} alt={`${key} certificate ${index + 1}`} layout="fill" objectFit="contain" />
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <button onClick={() => toggleShowMore(key)} className="show-more-button">
                            {showMore[key] ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedImage && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={closeModal}>
                            &times;
                        </button>
                        <div className="modal-image-container">
                            <Image src={selectedImage} alt="Enlarged Certificate" layout="fill" objectFit="contain" />
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .certifications-container {
                    display: flex;
                    justify-content: space-between;
                    padding: 20px;
                    flex-wrap: wrap;
                }

                .column {
                    flex: 1;
                    margin: 10px;
                    min-width: 300px;
                    max-width: 33%;
                }

                .column-title {
                    font-size: 1.2rem;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 20px;
                }

                .image-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 10px;
                }

                .card {
                    background-color: white;
                    border-radius: 12px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 10px;
                    cursor: pointer;
                    transition: transform 0.3s ease-in-out;
                }

                .card:hover {
                    transform: translateY(-10px);
                }

                .image-container {
                    position: relative;
                    width: 100%;
                    height: 150px;
                    overflow: hidden;
                }

                .show-more-button {
                    display: block;
                    margin: 20px auto;
                    background-color: #000000;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 25px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .show-more-button:hover {
                    background-color: #0056b3;
                }

                /* Modal Styles */
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }

                .modal-content {
                    position: relative;
                    width: 50%;
                    background: white;
                    border-radius: 8px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .modal-image-container {
                    position: relative;
                    width: 100%;
                    height: 50vh;
                }

                .close-button {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: none;
                    border: none;
                    font-size: 2rem;
                    color: black;
                    cursor: pointer;
                }

                @media (max-width: 768px) {
                    .certifications-container {
                        flex-direction: column;
                    }

                    .column {
                        max-width: 100%;
                    }

                    .modal-content {
                        width: 90%;
                    }

                    .modal-image-container {
                        height: 40vh;
                    }
                }
            `}</style>
        </div>
    );
};

export default Certifications;
