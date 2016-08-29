class ApplicationController < Sinatra::Base
  register Sinatra::ActiveRecordExtension

  set :views, File.dirname(__FILE__) + '/../views'
  set :public_folder, File.dirname(__FILE__) + '/../public'
  set :database, { adapter: 'sqlite3', database: File.dirname(__FILE__) + '/../../db.sqlite3' }
end

