class Task < ActiveRecord::Base
  def index
    @tasks = Task.all
  end
end
