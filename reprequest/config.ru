require 'bundler'
Bundler.require :default, ENV['RACK_ENV'].to_sym

ActiveRecord::Base.establish_connection(
	:adapter => 'sqlite3', 
	:database => 'db.sqlite3'
	)

# require models here
### for example: 
require './app/models/legislator'
require './app/models/vote'

# require controllers here
### for example: 
require './app/controllers/application_controller'
require './app/controllers/home_controller'


# map controllers here
### for example: map('/') { run HomeController  }
map ('/') {run HomeController}

