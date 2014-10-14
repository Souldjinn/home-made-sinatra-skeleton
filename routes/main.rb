get '/' do
  # sendhub = SendHubParty.new
  # @all_contacts = sendhub.get_contacts
  @all_contacts = ["name" => "Alexander"]
  erb :index
end
