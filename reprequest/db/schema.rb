# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160801203454) do

  create_table "legislators", force: :cascade do |t|
    t.string "last_name"
    t.string "first_name"
    t.string "birthday"
    t.string "gender"
    t.string "position"
    t.string "state"
    t.string "district"
    t.string "party"
    t.string "url"
    t.string "address"
    t.string "phone"
    t.string "contact_form"
    t.string "rss_url"
    t.string "twitter"
    t.string "facebook"
    t.string "facebook_id"
    t.string "youtube"
    t.string "youtube_id"
    t.string "bioguide_id"
    t.string "thomas_id"
    t.string "opensecrets_id"
    t.string "lis_id"
    t.string "cspan_id"
    t.string "govtrack_id"
    t.string "votesmart_id"
    t.string "ballotpedia_id"
    t.string "washington_post_id"
    t.string "icpsr_id"
    t.string "wikipedia_id"
  end

  create_table "votes", force: :cascade do |t|
    t.string "person_id"
    t.string "name"
    t.string "eligible"
    t.string "missed"
  end

end
