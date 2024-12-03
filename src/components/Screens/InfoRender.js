import React from 'react';

const InfoRender = ({events}) => {
    return (
        <div className='portfolio__content_game_present_item'>
            <p>Дата события: <span>{events.game.date}</span></p>
            <p>Позиция в таблице <span>Хозяева: {events.game.host_position} Гости: {events.game.guest_position}</span>
            </p>
            <p>
                Хозяева забивают:
                <span> {events.commands.host_analytics_data.host_data.host_total_games_score} </span>
                Гости забивают:
                <span> {events.commands.guest_analytics_data.guest_data.guest_total_score}</span>
            </p>
            <p>
                Хозяева пропускают:
                <span> {events.commands.host_analytics_data.host_data.host_total_game_lost} </span>
                Гости пропускают:
                <span> {events.commands.guest_analytics_data.guest_data.guest_total_lost}</span>
            </p>
            <p>
                Голов на выезде (Хозяева):
                <span><label> {events.commands.host_analytics_data.host_data.host_guest_total_score} </label></span>
                Голов дома (Гости):
                <span><label> {events.commands.guest_analytics_data.guest_data.guest_total_host_score}</label></span>
            </p>
            <p>
                Домашние матчи (Хозяева): {' '}
                <span>
                    <label>
                        | {events.commands.history_host[events.commands.history_host.length - 3].score}
                        {' '}- {events.commands.history_host[events.commands.history_host.length - 3].un_score} | {' '}
                        {events.commands.history_host[events.commands.history_host.length - 2].score}
                        {' '} - {events.commands.history_host[events.commands.history_host.length - 2].un_score} | {' '}
                        {events.commands.history_host[events.commands.history_host.length - 1].score}
                        {' '} - {events.commands.history_host[events.commands.history_host.length - 1].un_score} {' '} |
                    </label>
                </span>

                {' '} Гостевые матчи (Гости): {' '}
                <span>
                    <label>
                        | {events.commands.history_guest[events.commands.history_guest.length - 3].score}
                        {' '} - {events.commands.history_guest[events.commands.history_guest.length - 3].un_score} | {' '}
                        {events.commands.history_guest[events.commands.history_guest.length - 2].score}
                        {' '} - {events.commands.history_guest[events.commands.history_guest.length - 2].un_score} | {' '}
                        {events.commands.history_guest[events.commands.history_guest.length - 1].score}
                        {' '} - {events.commands.history_guest[events.commands.history_guest.length - 1].un_score} |
                    </label>
                </span>
            </p>
            <p>
                Вероятная ставка 1:
                {
                    events.commands.total_predict.guest_score_one
                        ? <span>
                            <label>
                                Гости забьют 1 {events.commands.total_predict.guest_score_one.toString()}
                            </label>
                        </span>
                        : <span>
                          <label>
                              Хозяева забьют 1 {events.commands.total_predict.host_score_one.toString()}
                          </label>
                      </span>
                }
            </p>
            <p>
                Вероятная ставка2 :
                <>
                    {
                        events.commands.total_predict.guest_score_2
                            ? <span>
                            <label>
                                Гости забьют 2 {events.commands.total_predict.guest_score_2.toString()}
                            </label>
                        </span>
                            : null
                    }
                    {
                        events.commands.total_predict.host_score_2
                            ? <span>
                            <label>
                                Хозяева забьют 2 {events.commands.total_predict.host_score_2.toString()}
                            </label>
                            </span>
                            : null
                    }

                    {
                        events.commands.total_predict.guest_score_2_risk
                            ? <span>
                            <label>
                                Гости забьют 2 c риском {events.commands.total_predict.guest_score_2_risk.toString()}
                            </label>
                        </span>
                            : null
                    }
                    {
                        events.commands.total_predict.host_score_2_risk
                            ? <span>
                            <label>
                                Хозяева забьют 2 c риском {events.commands.total_predict.host_score_2_risk.toString()}
                            </label>
                        </span>
                            : null
                    }
                </>
            </p>
            <p>
                Вероятная ставка 3:
                {
                    events.commands.total_predict.both_score
                        ? <span>
                            <label>
                                Обе забьют {events.commands.total_predict.both_score.toString()}
                            </label>
                        </span>
                        : null
                }
                {
                    events.commands.total_predict.both_score_strong
                        ? <span>
                            <label>
                                Обе забьют {events.commands.total_predict.both_score_strong.toString()}
                            </label>
                        </span>
                        : null
                }
                {
                    events.commands.total_predict.both_score_risk
                        ? <span>
                            <label>
                                Обе забьют с риском {events.commands.total_predict.both_score_risk.toString()}
                            </label>
                        </span>
                        : null
                }
            </p>
            <p>
                Вероятная ставка 4:
                {
                    events.commands.total_predict.host_lower_two_risk
                        ? <span>
                            <label>
                                Хозяева не забьют 2 с риском {events.commands.total_predict.host_lower_two_risk.toString()}
                            </label>
                        </span>
                        : null

                }
                {
                    events.commands.total_predict.guest_lower_two_risk
                        ? <span>
                            <label>
                                Гости не забьют 2 с риском {events.commands.total_predict.guest_lower_two_risk.toString()}
                            </label>
                        </span>
                        : null
                }
            </p>
            <p>
                Вероятная ставка 5:
                {
                    events.commands.total_predict.total_lower_four
                        ? <span>
                            <label>
                                В матче меньше 4 гола {events.commands.total_predict.total_lower_four.toString()}
                            </label>
                        </span>
                        : null

                }
            </p>
        </div>
    );
};

export default InfoRender;