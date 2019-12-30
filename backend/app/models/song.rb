class Song < ApplicationRecord
    has_many :mixtape_songs, dependent: :destroy
    has_many :mixtapes, through: :mixtape_songs
end
