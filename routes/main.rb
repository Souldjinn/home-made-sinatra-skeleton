get '/' do
  # sendhub = SendHubParty.new
  # @all_contacts = sendhub.get_contacts
  @all_contacts = ["name" => "Alexander"]
  erb :index
end

post '/contacts/create' do
  requests = SendHubParty.new
  response = requests.new_contact(params['name'], params['phone'])
  response.body
end

post '/contacts/send_message' do
  request = SendHubParty.new
  response = request.send_message(params['contactid'], params['message'])
end
