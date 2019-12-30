class MixtapeSongsController < ApplicationController

    def index
        mixtapesongs = MixtapeSong.all
        render json: mixtapesongs, include: :song
    end

    def create
        mixtapesong = MixtapeSong.create(song_id: params[:song_id], mixtape_id: params[:mixtape_id])
        render json: mixtapesong, include: :song
    end

end
