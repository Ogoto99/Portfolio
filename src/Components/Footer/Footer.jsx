import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.player}>
      {/* Left Section - Track Info */}
      <div className={styles.trackInfo}>
        <img
          src="https://i.scdn.co/image/ab67616d0000b2735b4b0cbf329ca180b168647f"
          alt="album cover"
          className={styles.albumArt}
        />
        <div className={styles.songDetails}>
          <h4>Overloading (OVERDOSE)</h4>
          <p>Mavins, Crayon, Ayra Starr, LADIPOE, Magixx, Boy Spyce</p>
        </div>
        <div className={styles.trackIcons}>
          <i className="ri-heart-line"></i>
          <i className="ri-add-circle-line"></i>
        </div>
      </div>

      {/* Center Section - Playback Controls */}
      <div className={styles.controls}>
        <div className={styles.playbackButtons}>
          <i className="ri-shuffle-line"></i>
          <i className="ri-skip-back-line"></i>
          <button className={styles.playBtn}>
            <i className="ri-play-fill"></i>
          </button>
          <i className="ri-skip-forward-line"></i>
          <i className="ri-chat-3-line"></i>
        </div>
        <div className={styles.progress}>
          <span>0:02</span>
          <div className={styles.progressBar}>
            <div className={styles.progressFill}></div>
          </div>
          <span>3:25</span>
        </div>
      </div>

      {/* Right Section - Volume & Devices */}
      <div className={styles.devices}>
        <i className="ri-device-line"></i>
        <i className="ri-search-line"></i>
        <i className="ri-play-list-line"></i>
        <i className="ri-volume-up-line"></i>
        <div className={styles.volumeBar}>
          <div className={styles.volumeFill}></div>
        </div>
        <i className="ri-fullscreen-line"></i>
      </div>
    </footer>
  );
}

export default Footer;
