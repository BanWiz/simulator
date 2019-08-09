import { EffectiveBuff } from '../model/effective-buff';
import { CrafterStats } from '../model/crafter-stats';

export interface SimulationState {
  progression: number;
  quality: number;
  durability: number;
  availableCP: number;
  buffs: EffectiveBuff[];
  state: 'NORMAL' | 'EXCELLENT' | 'GOOD' | 'POOR' | undefined;

  crafterStats: CrafterStats;
}
