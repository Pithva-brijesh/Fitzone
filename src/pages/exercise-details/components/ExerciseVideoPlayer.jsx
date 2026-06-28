import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ExerciseVideoPlayer = ({ exercise }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [showControls, setShowControls] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const videoRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const video = videoRef?.current;
        if (!video) return;

        const updateTime = () => setCurrentTime(video?.currentTime);
        const updateDuration = () => setDuration(video?.duration);

        video?.addEventListener('timeupdate', updateTime);
        video?.addEventListener('loadedmetadata', updateDuration);

        return () => {
            video?.removeEventListener('timeupdate', updateTime);
            video?.removeEventListener('loadedmetadata', updateDuration);
        };
    }, []);

    const togglePlay = () => {
        const video = videoRef?.current;
        if (video?.paused) {
            video?.play();
            setIsPlaying(true);
        } else {
            video?.pause();
            setIsPlaying(false);
        }
    };

    const handleSeek = (e) => {
        const video = videoRef?.current;
        const rect = e?.currentTarget?.getBoundingClientRect();
        const pos = (e?.clientX - rect?.left) / rect?.width;
        video.currentTime = pos * duration;
    };

    const toggleFullscreen = () => {
        const container = containerRef?.current;
        if (!document.fullscreenElement) {
            container?.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds?.toString()?.padStart(2, '0')}`;
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[500px] lg:h-[650px] bg-black rounded-xl overflow-hidden morphic-card" onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
        >
            {/* Video Element */}
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster={exercise?.thumbnail}
                onEnded={() => setIsPlaying(false)}
            >
                <source src={exercise?.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Fallback Image if no video */}
            {!exercise?.videoUrl && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        src={exercise?.thumbnail}
                        alt={exercise?.thumbnailAlt}
                        className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="text-center text-white">
                            <Icon name="Play" size={64} className="mx-auto mb-2" />
                            <p className="font-poppins text-lg">Video Coming Soon</p>
                        </div>
                    </div>
                </div>
            )}
            {/* Play/Pause Overlay */}
            {!isPlaying && exercise?.videoUrl && (
                <div
                    className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
                    onClick={togglePlay}
                >
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center micro-celebration">
                        <Icon name="Play" size={32} color="white" />
                    </div>
                </div>
            )}
            {/* Video Controls */}
            {showControls && exercise?.videoUrl && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    {/* Progress Bar */}
                    <div
                        className="w-full h-2 bg-white/20 rounded-full mb-3 cursor-pointer"
                        onClick={handleSeek}
                    >
                        <div
                            className="h-full bg-primary rounded-full transition-all duration-200"
                            style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                    </div>

                    {/* Control Buttons */}
                    <div className="flex items-center justify-between text-white">
                        <div className="flex items-center space-x-3">
                            <button
                                onClick={togglePlay}
                                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                            >
                                <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
                            </button>

                            <div className="flex items-center space-x-2">
                                <Icon name="Volume2" size={16} />
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.1"
                                    value={volume}
                                    onChange={(e) => {
                                        const newVolume = parseFloat(e?.target?.value);
                                        setVolume(newVolume);
                                        if (videoRef?.current) videoRef.current.volume = newVolume;
                                    }}
                                    className="w-20 h-1 bg-white/20 rounded-full"
                                />
                            </div>

                            <span className="font-mono text-sm">
                                {formatTime(currentTime)} / {formatTime(duration)}
                            </span>
                        </div>

                        <div className="flex items-center space-x-2">
                            <button
                                onClick={toggleFullscreen}
                                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                            >
                                <Icon name={isFullscreen ? "Minimize" : "Maximize"} size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Exercise Info Overlay */}
            <div className="absolute top-4 left-4 right-4">
                <div className="flex items-start justify-between">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 text-white">
                        <h3 className="font-poppins font-semibold text-lg">{exercise?.name}</h3>
                        <p className="text-sm opacity-80">{exercise?.category}</p>
                    </div>

                    <div className="flex space-x-2">
                        <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-center">
                            <div className="font-mono text-sm font-semibold">{exercise?.duration}</div>
                            <div className="text-xs opacity-80">Duration</div>
                        </div>
                        <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-center">
                            <div className="font-mono text-sm font-semibold">{exercise?.difficulty}</div>
                            <div className="text-xs opacity-80">Level</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExerciseVideoPlayer;