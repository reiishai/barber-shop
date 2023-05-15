import React, { useState } from 'react';
import { IonCol, IonGrid, IonRow , IonButton } from '@ionic/react';

import { useLocation } from 'react-router';

const Calendar: React.FC = () => {
    const location = useLocation();
    const [btnColor, setColor] = useState("success")

    function changeColor() {
      setColor("warning")
    }

    return (
      <IonGrid>
        <IonRow>
          <IonCol></IonCol>
          <IonCol>Sunday</IonCol>
          <IonCol>Monday</IonCol>
          <IonCol>Tuesday</IonCol>
          <IonCol>Wednesday</IonCol>
          <IonCol>Thursdy</IonCol>
          <IonCol>Friday</IonCol>
        </IonRow>
        <IonRow >
          <IonCol>8:00-8:30</IonCol>
          <IonCol><IonButton onClick={changeColor}
          color={btnColor}>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol>8:30-9:00</IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol>9:00-9:30</IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol>9:30-10:00</IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol>10:00-10:30</IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol>10:30-11:00</IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol>11:00-11:30</IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol>11:30-12:00</IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol>12:00-12:30</IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol>12:30-13:00</IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol>13:00-13:30</IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol>13:30-14:00</IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol>14:00-14:30</IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol>14:30-15:00</IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol>15:00-15:30</IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol>15:30-16:00</IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
          <IonCol><IonButton>2</IonButton></IonCol>
        </IonRow>

      </IonGrid>
  );
}

export default Calendar;
