#require all gems
require 'bundler/setup'
Bundler.require(:default)

# Set . to pre-pend the load path
$LOAD_PATH.unshift(File.expand_path('.'))


begin
  require 'dotenv'
  Dotenv.load(".env.#{ENV['RACK_env']}", ".env")
rescue LoadError
end

["routes", "helpers"].each do |directory_to_load|
  Dir["#{directory_to_load}/*.rb"].each do |file_to_load|
    require file_to_load
  end
end
