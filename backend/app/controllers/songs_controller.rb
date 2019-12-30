class SongsController < ApplicationController

    def index
        song = Song.all 
        render json: song
    end

    def show
        song = Song.find(params[:id])
        render json: song
    end

    def create
        song = Song.create(song_params)
        render json: song
    end

    def update
        song = Song.find(params[:id])
        song.update(song_params)
        render json: song
    end

    def destroy
        song = Song.find(params[:id])
        song.destroy
    end

    private

    def find_mixtape
        mixtape = MixtapeSong.where(song_id: params[:id])
        mixtape
    end

    def song_params
        params.permit(:title, :artist)
    end
end
