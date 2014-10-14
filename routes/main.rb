get '/' do
  "hello world"
  # requests = SendHubParty.new
  # @all_contacts = requests.get_contacts
  @all_contacts = ["name" => "Alexander"]
  erb :index
end
