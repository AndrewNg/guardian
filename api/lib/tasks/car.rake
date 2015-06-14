namespace :car do
  task track: :environment do
    data = JSON.parse(File.read("lib/simulation-data/simulation-1.json"))
    count = 0

    while true
      datum = data["responses"][count]
      puts datum

      sleep(1.second)

      count += 1
      count = 0 if count >= data.length
    end
  end
end
