import 'phaser'
import Boot from './scenes/boot'
import { Game as GameScene } from './scenes/game'
import Preload from './scenes/preload'

const config: Phaser.Types.Core.GameConfig = {
  title: 'Demo Game',

  scene: [Boot, Preload, GameScene],
  backgroundColor: '#333',
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'container',
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    width: 800,
    height: 600,
    max: {
      width: 800,
      height: 600,
    },
  },
}

window.addEventListener('load', () => {
  window['game'] = new Phaser.Game(config)
})
