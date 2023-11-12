import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'


const LeftPart = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x:30 },
    show: { opacity: 1, x:0, transition:{type: 'spring'} },
  };
  return (
    <div className="relative md:mt-0 mt-16">      
    <motion.div
    className="space-y-5"
    variants={container}
    initial="hidden"
    animate="show"
  >
    <motion.div className="box"/>
    <motion.p variants={item} className="Name">
      Xebastiane Cameron G. Pitogo
    </motion.p>
    <motion.p variants={item} className="pink-text-gradient">
      I am
    </motion.p>
  </motion.div>
  <motion.div class="container">
    <motion.div class="content">
      <motion.div class="content__container">
        <motion.ul class="content__container__list">
          <motion.li class="content__container__list__item">⌨️✏️ UC Student! 🖱️🧠</motion.li>
          <motion.li class="content__container__list__item">🎨🖌️ Arts Enthusiast! 👁️✨</motion.li>
          <motion.li class="content__container__list__item">🔥🦍 Fitness Lover! 💪🏋️‍♂️</motion.li>
          <motion.li class="content__container__list__item">🎮🕹️ Gamer! 👾⚔️</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  </motion.div>
  <motion.div className='flex flex-row justify-start items-center mt-5'>
    <a href="https://lookup.guru/633350350400743436" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faDiscord} fade size="3x" style={{ margin: '0 40px' }} />
    </a>
    <a href="https://www.facebook.com/XebastianePitogo" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} fade size="3x" style={{ margin: '0 40px' }} />
    </a>
    <a href="https://twitter.com/BasteeC" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} fade size="3x" style={{ margin: '0 40px' }} />
    </a>
    <a href="https://github.com/XebastianePitogo" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} fade size="3x" style={{ margin: '0 40px' }} />
    </a>
    <a href="https://www.instagram.com/camytog/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} fade size="3x" style={{ margin: '0 40px' }} />
    </a>
  </motion.div>
    </div>
  );
};

export default LeftPart;