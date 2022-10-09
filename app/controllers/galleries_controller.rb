class GalleriesController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        render json: Gallery.all, status: :ok
    end

    def show
        gallery = Gallery.find(params[:id])
        render json: gallery, status: :ok
    end

end
