class Mixtape < ApplicationRecord
    has_many :mixtape_songs, dependent: :destroy
    has_many :songs, through: :mixtape_songs

    accepts_nested_attributes_for :songs
end
