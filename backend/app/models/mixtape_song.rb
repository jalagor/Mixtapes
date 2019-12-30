class MixtapeSong < ApplicationRecord
  belongs_to :song
  belongs_to :mixtape
end
