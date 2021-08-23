import { Bar } from 'react-chartjs-2';

export default function DiagramMaker(tasks) {

    const pendingTasks = tasks.filter(task => task.status === "pending");
    const pendingDates = pendingTasks.map(task => task.due_on)   
    const labelsGoodFormat = []
    let orderedPendingTasks = []
    console.debug(orderedPendingTasks);
    for(let dateIndex of pendingDates)
    {

        labelsGoodFormat.push(dateIndex.substring(0, 10));
        orderedPendingTasks.push(pendingTasks.filter(task => task.due_on === dateIndex).length);



    }
    const data = {
      labels:  labelsGoodFormat,
      datasets: [{
        label: 'tareas pendientes',
        data: orderedPendingTasks,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };
        return (<Bar data={data} width={10} height={5} />);
       
}
