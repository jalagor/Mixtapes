# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rest-client'
require 'pry'

Song.destroy_all
Mixtape.destroy_all

def song_list 
    page_numbers = [0, 200, 400, 600, 800]
    page_numbers.map do |page_number|
    response = RestClient.get("http://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=200&offset=#{page_number}&range=year")
    result = JSON.parse(response)

    result["tracks"].map do |song|
        Song.create(title: song["name"], artist: song["artistName"], preview: song["previewURL"])
    end
    end
end

song_list

party = Mixtape.create(name: "Party")
emo = Mixtape.create(name: "f*ck everything")