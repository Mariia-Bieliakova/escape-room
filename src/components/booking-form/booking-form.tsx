import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks';
import { postBookingQuestInfo } from '../../store/api-actions';
import { BookingQuestInfo } from '../../types/booking';
import { QuestInfo } from '../../types/quest';

type BookingFormProps = {
  bookingInfo: BookingQuestInfo;
  quest: QuestInfo;
}

type FormValues = {
  id: number;
  date: 'today' | 'tomorrow';
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  locationId: number;
  questId: number;
}

function BookingForm({bookingInfo, quest}: BookingFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {register, handleSubmit, formState: {isValid}, setValue} = useForm<FormValues>();
  const {id, peopleMinMax} = quest;

  const {today, tomorrow} = bookingInfo.slots;

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    const payload = {...values, id: bookingInfo.id, questId: id, locationId: 1};

    dispatch(postBookingQuestInfo({...payload}));
  };

  return (
    <form
      className="booking-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset
          className="booking-form__date-section"
        >
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">
            {today.map((slot) => {
              const {time, isAvailable} = slot;
              return (
                <label className="custom-radio booking-form__date" key={time}>
                  <input
                    type="radio"
                    id={`today${time}`}
                    value={time}
                    {...register('time', {
                      disabled: !isAvailable
                    })}
                    onChange={()=> setValue('date', 'today')}
                  />
                  <span className="custom-radio__label">{time}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div className="booking-form__date-inner-wrapper">
            {tomorrow.map((slot) => {
              const {time, isAvailable} = slot;
              return (
                <label className="custom-radio booking-form__date" key={time}>
                  <input
                    type="radio"
                    id={`tomorrow${time}`}
                    value={time}
                    {...register('time', {
                      disabled: !isAvailable
                    })}
                    onChange={()=> setValue('date', 'tomorrow')}
                  />
                  <span className="custom-radio__label">{time}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">Ваше имя</label>
          <input
            type="text"
            id="name"
            placeholder="Имя"
            {...register('contactPerson', {
              required: true,
              pattern: /[А-Яа-яЁёA-Za-z']{1,}/
            })}
          />
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input
            type="tel"
            id="tel"
            placeholder="Телефон"
            {...register('phone', {
              required: true,
              pattern: /[0-9]{10,}/
            })}
          />
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input
            type="number"
            id="person"
            placeholder="Количество участников"
            {...register('peopleCount', {
              required: true,
              min: peopleMinMax[0],
              max: peopleMinMax[1]
            })}
          />
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input
            type="checkbox"
            id="children"
            {...register('withChildren')}
          />
          <span className="custom-checkbox__icon">
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick" />
            </svg>
          </span>
          <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
        </label>
      </fieldset>
      <button
        className="btn btn--accent btn--cta booking-form__submit"
        type="submit"
        disabled={!isValid}
      >Забронировать
      </button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
        <span className="custom-checkbox__icon">
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick" />
          </svg>
        </span>
        <span className="custom-checkbox__label">Я&nbsp;согласен с
          <a className="link link--active-silver link--underlined" href="/#">правилами обработки персональных данных</a>&nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}

export default BookingForm;
