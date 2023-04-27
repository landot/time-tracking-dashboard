import exerciseIcon from '../images/icon-exercise.svg';
import playIcon from '../images/icon-play.svg';
import socialIcon from '../images/icon-social.svg';
import studyIcon from '../images/icon-study.svg';
import selfCareIcon from '../images/icon-self-care.svg';
import workIcon from '../images/icon-work.svg';

interface CategoryInfo {
    svgIcon: string;
    backgroundColor: string;
}

export enum Categories {
    Exercise,
    Play,
    "Self Care",
    Social,
    Study,
    Work
}

  export const categories: Record<Categories, CategoryInfo> = {
      [Categories.Exercise]: { svgIcon: exerciseIcon, backgroundColor: '#4BCF82' },
      [Categories.Play]: { svgIcon: playIcon, backgroundColor: '#55C2E6' },
      [Categories["Self Care"]]: { svgIcon: selfCareIcon, backgroundColor: '#F1C75B' },
      [Categories.Social]: { svgIcon: socialIcon, backgroundColor: '#7335D2' },
      [Categories.Study]: { svgIcon: studyIcon, backgroundColor: '#FF5E7D' },
      [Categories.Work]: { svgIcon: workIcon, backgroundColor: '#FF8B64' },
  };
  