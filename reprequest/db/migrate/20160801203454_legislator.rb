class Legislator < ActiveRecord::Migration
  def change
    create_table :legislators do |t|
      t.string :last_name
      t.string :first_name
      t.string :birthday
      t.string :gender
      t.string :position
      t.string :state
      t.string :district
      t.string :party
      t.string :url
      t.string :address
      t.string :phone
      t.string :contact_form
      t.string :rss_url
      t.string :twitter
      t.string :facebook
      t.string :facebook_id
      t.string :youtube
      t.string :youtube_id
      t.string :bioguide_id
      t.string :thomas_id
      t.string :opensecrets_id
      t.string :lis_id
      t.string :cspan_id
      t.string :govtrack_id
      t.string :votesmart_id
      t.string :ballotpedia_id
      t.string :washington_post_id
      t.string :icpsr_id
      t.string :wikipedia_id
    end
  end
end
