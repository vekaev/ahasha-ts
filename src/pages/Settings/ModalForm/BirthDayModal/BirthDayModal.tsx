import React, { useState, useContext, useRef } from 'react';
import { IModalDataProps } from '../../Interfaces';
import styles from '../ModalForm.module.scss';
import { LangContext } from '../../../../components/LangContext/LangContext';

const BirthDayModal: React.FC<IModalDataProps> = ({
  userData,
  setUserData,
  showModal,
}) => {
  const day = useRef<any>(null);
  const month = useRef<any>(null);
  const year = useRef<any>(null);

  const [data, setData] = useState({
    day: userData.birthDay.day,
    month: userData.birthDay.month,
    year: userData.birthDay.year,
  });

  const validation = (field: string, value: string) => {
    switch (field) {
      case 'day':
        if (+data.month === 2) {
          return +data.year % 4 === 0
            ? /^(0[1-9]|[2][0-9])$/.test(value)
            : /^(0[1-9]|[2][0-8])$/.test(value);
        }
        if (+data.month % 2 === 0 && +data.month < 8) {
          return /([0-2]\d|3[0])/.test(value);
        } else if (+data.month % 2 !== 0 && +data.month < 8) {
          return /([0-2]\d|3[0-1])/.test(value);
        }
        if (+data.month % 2 === 0 && +data.month >= 8) {
          return /([0-2]\d|3[0-1])/.test(value);
        } else if (+data.month % 2 !== 0 && +data.month >= 8) {
          return /([0-2]\d|3[0])/.test(value);
        }
        break;
      case 'month':
        return /(0[1-9]|1[0-2])/.test(value);
      case 'year':
        if (+data.day === 29 && +data.month === 2) {
          return +value % 4 === 0 ? true : false;
        }
        return /19[0-9][0-9]|20[01][0-9]/.test(value);
    }
  };

  const dayChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, maxLength } = event.target;

    if (value.length >= maxLength) {
      if (!validation(name, value)) return;
      setData({
        ...data,
        [name]: value,
      });

      month.current.focus();
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const monthChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, maxLength } = event.target;

    if (value.length >= maxLength) {
      if (!validation(name, value)) return;
      if (!validation('day', data.day.toString())) return;
      setData({
        ...data,
        [name]: value,
      });

      year.current.focus();
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const yearChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, maxLength } = event.target;

    if (value.length >= maxLength) {
      if (!validation(name, value)) return;

      setData({
        ...data,
        [name]: value,
      });

      year.current.setSelectionRange(0, 0);
      year.current.blur();
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
    const { name } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    const { name, value }: { name: string; value: string } = event.target;

    if (!value) {
      setData((prev) => ({
        ...prev,
        [name]: userData.birthDay[name],
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    for (const [field, value] of Object.entries(data)) {
      if (!validation(field, value.toString())) {
        return;
      }
    }

    setUserData({
      ...userData,
      birthDay: {
        ...data,
      },
    });
    showModal('close');
  };

  const langContext = useContext(LangContext);
  let text = langContext?.useLocale()['modalWindow']['formBirthDay'];
  return (
    <>
      <form
        id='modal-form'
        className={styles['modal-form']}
        onSubmit={handleSubmit}
      >
        <div className={styles['modal-form-input-wrapper']}>
          <label className={styles['modal-form-label']}>
            {text['day']}
            <input
              type='text'
              name='day'
              className={`${styles['modal-form-input']} ${styles['w52']}`}
              value={data.day}
              onChange={dayChange}
              ref={day}
              maxLength={2}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className={styles['modal-form-label']}>
            {text['month']}
            <input
              type='text'
              name='month'
              className={`${styles['modal-form-input']} ${styles['w52']}`}
              value={data.month}
              onChange={monthChange}
              ref={month}
              maxLength={2}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className={styles['modal-form-label']}>
            {text['year']}
            <input
              type='text'
              name='year'
              className={`${styles['modal-form-input']} ${styles['w112']}`}
              value={data.year}
              onChange={yearChange}
              ref={year}
              maxLength={4}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
        </div>
      </form>
    </>
  );
};

export default BirthDayModal;
