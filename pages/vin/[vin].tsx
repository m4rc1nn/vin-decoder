import VinLayout from '../../components/layout';
import styles from './../../styles/vin/vin.module.scss';

interface VinProps {
  vin: string;
}

export default function Vin({ vin }: VinProps) {
  return (
    <VinLayout>
      <div className={styles.vin_container}>
        <h1>Przegląd wyposażenia względem VINu:</h1>
      </div>
    </VinLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { vin: "" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  return {
    props: {
      vin: params.vin,
    },
  };
}
