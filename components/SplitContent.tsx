import React, { ReactNode } from 'react';

import styles from './SplitContent.module.scss';

interface Props {
  leftChild: ReactNode;
  rightChild: ReactNode;
};

const SplitContent: React.FC<Props> = ({ leftChild, rightChild }) => (
  <div className={styles.splitContent}>
    <div className={styles.leftChild}>
      {leftChild}
    </div>
    <div className={styles.rightChild}>
      {rightChild}
    </div>
  </div>
);

export default SplitContent;
