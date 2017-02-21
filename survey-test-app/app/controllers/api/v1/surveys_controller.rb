class Api::V1::SurveysController < ApplicationController

  def index
    @surveys = Survey.all
  end

  def create
    @survey = Survey.new(survey_params)

    if @survey.save
      render :show
    else
      render json: { errors: @survey.errors.full_messages }, status: 422
    end
  end

  def show
    @survey = Survey.find_by(id: params[:id])
  end

  private

    def survey_params
      params.require(:survey).permit(
        :name,
        :start_time,
        :end_time,
        :user_id
      )
    end

end
