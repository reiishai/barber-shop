import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import { useLocation } from 'react-router';

const Calendar: React.FC = () => {
    const location = useLocation();
    return (
      <IonGrid>
        <IonRow>
          <IonCol>שעות</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
          <IonCol>7</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>Sunday</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
          <IonCol>7</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>Sunday</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
          <IonCol>7</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>Sunday</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
          <IonCol>7</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>Sunday</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
          <IonCol>7</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>Sunday</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
          <IonCol>7</IonCol>
        </IonRow>
      </IonGrid>
  );
}

export default Calendar;
